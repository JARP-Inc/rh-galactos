import uuid
from typing import Optional
from sqlmodel import Field, SQLModel
from datetime import datetime


class Article(SQLModel, table=True):
    id: Optional[str] = Field(default=str(uuid.uuid4()), primary_key=True)
    title: str = Field(index=True)
    date: datetime = Field(index=True, default_factory=datetime.now)
    author: str = Field(index=True)
    content: str = Field(index=True)
    time: str = Field(index=True)

    @classmethod
    def parse_date(cls, date_str: str) -> datetime:
        return datetime.strptime(date_str, '%d/%m/%Y')

    def from_dict(self, data: dict):
        super().from_dict(data)
        if 'date' in data:
            self.date = self.parse_date(data['date'])
