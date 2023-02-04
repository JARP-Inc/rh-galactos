from typing import Optional
from sqlmodel import Field, SQLModel


class Article(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str = Field(index=True)
    date: str = Field(index=True)
    author: str = Field(index=True)
    content: str = Field(index=True)
    time: str = Field(index=True)
