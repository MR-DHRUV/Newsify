import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import "./News.css"
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News2 = (props) => {

    const capitalizeFirstLetter = ([first, ...rest], locale = navigator.language) => {
        return first.toLocaleUpperCase(locale) + rest.join('')
    }

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);



    const updateNews = async () => {
        props.setProgress(0);
        // let apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let apiUrl = `https://newsdata.io/api/1/news?apikey=${props.apiKey}&country=${props.country}&page=${page}&category=${props.category}`

        props.setProgress(50);
        let data = await fetch(apiUrl);
        let parsedData = await data.json();
        setArticles(parsedData.results);
        setTotalResults(parsedData.totalResults);
        props.setProgress(100);
    }

    // use Effect sabse pahle jo render hona hota haii woh render karta haii 
    useEffect(() => {
        updateNews();
        document.title = `Newzify | ${capitalizeFirstLetter(props.category)}`;
        //eslint-disable-next-line
    }, [])

    const nullImageUrl = "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80";


    const fetchMoreData = async () => {

        // let apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${(page) + (1)}&pageSize=${props.pageSize}`;
        let apiUrl = `https://newsdata.io/api/1/news?apikey=${props.apiKey}&country=${props.country}&page=${(page)+(1)}&category=${props.category}`


        setPage((page) + (1))

        let data = await fetch(apiUrl);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.results));
        setTotalResults(parsedData.totalResults);
    };

    return (
        <>
            <div className="container mt-5">
                <div className="container heading-main-div"><h1 className="text-center mt-6 heading-main py-2 px-5">{(props.category)} Headlines</h1></div></div>
                
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {

                            let myDate = Date(element.pubDate);
                            let dateStore = myDate.split(" ");
                            let displayDate = dateStore[0] + "," + dateStore[2] + " " + dateStore[1] + ", " + dateStore[3];

                            return <div className="col-md-3" key={element.url}>
                                <NewsItem title={element.title != null ? element.title.slice(0, 60) : "Breaking News : News Live From   "} description={element.description != null ? element.description.slice(0, 100) : "Latest news. For more updates stay tuned. To read more click on READ MORE    ."} imageUrl={element.image_url != null ? element.image_url : nullImageUrl} newsUrl={element.link} author={element.creator != null ? element.creator.slice(0, 11) : "Newzify"} publishedAt={displayDate} source={element.source_id.slice(0, 23)} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}


export default News2

News2.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
}

News2.defaultProps = {
    country: "in",
    category: "general",
}

