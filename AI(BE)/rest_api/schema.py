from typing import Dict, List, Optional, Union, Any
from pydantic import BaseModel, Field


class DocumentRequest(BaseModel):
    document: Optional[Union[List[str],str]] = None
