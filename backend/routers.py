import main
import articlegenerator
from fastapi import APIRouter
from sqlmodel import Session, select
from models import Article

router = APIRouter()


@router.post("/", response_description="Add new article")
async def create_article(prompt):

    headline, body = articlegenerator.generate_newsarticle(prompt)

    new_article = Article(title=headline, author='me',
                          content=body, time='10:12am')

    with Session(main.engine) as session:
        session.add(new_article)
        session.commit()
        session.refresh(new_article)
        return new_article


@router.get("/", response_description="List 5 articles given page")
async def list_articles(page):

    pagination_slice1 = (5*int(page))
    pagination_slice2 = 5*(int(page)+1)

    with Session(main.engine) as session:
        articles = session.exec(
            select(Article)).all()

        sorted_articles = sorted(
            articles, key=lambda article: article.date, reverse=True)

        if (pagination_slice2 > len(sorted_articles)):
            pagination_slice2 = len(sorted_articles)

        return sorted_articles[pagination_slice1:pagination_slice2]


@ router.get("/{id}", response_description="Get a single article")
async def get_article(id):
    with Session(main.engine) as session:
        articles = session.exec(select(Article).where(Article.id == id))
        return articles
