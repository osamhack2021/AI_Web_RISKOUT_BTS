import asyncio
from crawler.crawler import crawl_manager
from crawler.setting import site_list

async def main():
    futures = [asyncio.ensure_future(crawl_manager(site)) for site in site_list.values()]

    await asyncio.gather(*futures)

if __name__ == '__main__':
    asyncio.run(main())
