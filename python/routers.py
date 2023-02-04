import main
from fastapi import APIRouter
from sqlmodel import Session, select
from models import Article

router = APIRouter()


@router.post("/", response_description="Add new article")
async def create_article(article: Article):
    with Session(main.engine) as session:
        session.add(article)
        session.commit()
        session.refresh(article)
        return article


@router.get("/", response_description="List all articles")
async def list_articles():
    with Session(main.engine) as session:
        articles = session.exec(select(Article)).all()
        return articles


@router.get("/{id}", response_description="Get a single article")
async def get_article(id):
    with Session(main.engine) as session:
        articles = session.exec(select(Article).where(Article.id == id))
        return articles
