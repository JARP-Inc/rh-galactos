import os
from fastapi import FastAPI
from dotenv import load_dotenv
from sqlmodel import SQLModel, create_engine
from routers import router

load_dotenv()

app = FastAPI()

engine = create_engine(os.getenv('BITIO_KEY'))


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


@app.on_event("startup")
def on_startup():
    create_db_and_tables()


app.include_router(router, prefix="/articles")
