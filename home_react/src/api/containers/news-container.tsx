import React, {useState} from "react"
import { BASE_PATH, SEARCH_PATH, SEARCH_PARAM, PAGE_HITS, PAGE_PARAM } from '../constants/api-constants';
import {Button} from "../../components/Button/Button"

export const News = () => {

interface IPost {
    author: string,
    created_at: string,
    num_comments: number,
    title: string,
    points: number,
    url: string,
    objectID: string
}

interface IResult {
    hits?: IPost[],
    page?: number,
    nbPages?: number
}


const [searchQuery, setSearchQuery] = useState("")
const [result, setResult] = useState<IResult>({})
const [hitsPerPage, setHitsPerPage] = useState(20)
const [page, setPage] = useState(0)

const fetchData = (searchQuery: string, hitsPerPage: number, page: IPost) => {
    fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}&${PAGE_HITS}${hitsPerPage}&${PAGE_PARAM}${page}`)
        .then(res => res.json() as Promise<IResult>)
        .then(result => setNews(result))
        .catch(error => error);
} 

const setNews = (result: IResult) => { // для передачи полученной с сервера инфы в стейт
    console.log({result});
    setResult(result)
}

  return (
    <div>
       
    </div>
  )
}
