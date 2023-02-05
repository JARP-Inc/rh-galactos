import app
import asyncio
import twilioconfig
import articlegenerator
from twilio.rest import Client
from fastapi import APIRouter
from sqlmodel import Session, select
from models import Article

router = APIRouter()

settings = twilioconfig.Settings()


def unstringify(author):
    nweauther_list = author.split("-")
    new_author_cap_list = []
    for author in nweauther_list:
        new_author_cap_list.append(author.capitalize())

    return " ".join(new_author_cap_list)


@router.post("/", response_description="Add new article")
async def create_article(prompt, author):

    headline, body, image_url = articlegenerator.generate_newsarticle(
        prompt, author)

    new_article = Article(title=headline, author=author,
                          content=body, time='10:12am', image_url=image_url)

    phone = "+447827744549"

    def send_sms(to_number, body):
        client = Client(settings.twilio_account_sid,
                        settings.twilio_auth_token)
        return client.messages.create(from_=settings.twilio_phone_number,
                                      to=to_number, body=body)

    with Session(app.engine) as session:
        session.add(new_article)
        session.commit()
        session.refresh(new_article)

    await asyncio.get_event_loop().run_in_executor(None, send_sms, phone, 'Read All About It!{}\n\nWritten by {}\n\n http://localhost:3000/article?article={}'.format(headline, unstringify(author), new_article.id))

    return new_article


@router.get("/", response_description="List 5 articles given page")
async def list_articles(page):

    pagination_slice1 = (5*int(page))
    pagination_slice2 = 5*(int(page)+1)

    with Session(app.engine) as session:
        articles = session.exec(
            select(Article)).all()

        sorted_articles = sorted(
            articles, key=lambda article: article.date, reverse=True)

        if (pagination_slice2 > len(sorted_articles)):
            pagination_slice2 = len(sorted_articles)

        return sorted_articles[pagination_slice1:pagination_slice2]


@ router.get("/id/{id}", response_description="Get a single article")
async def get_article_by_id(id: int):
    with Session(app.engine) as session:
        article_id = Article.id
        statement = select(Article).where(article_id == id)
        # should add try catch to deal with out of bounds id
        articles = session.exec(statement).one()
        return articles


@ router.get("/author/{author}", response_description="Get an authors articles")
async def get_article_by_author(author):
    with Session(app.engine) as session:
        article_author = Article.author
        print(article_author)
        print(author)
        statement = select(Article).where(article_author == author)
        # should add try catch to deal with none existent author
        articles = session.exec(statement).all()
        return articles
