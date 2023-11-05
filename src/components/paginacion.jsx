import React from 'react'
import Pagination from 'react-bootstrap/Pagination';

export function paginacion ({page, total_pages}) {

    useEffect(() =>{
      let item= [];
      for (let i=1; i< total_pages; i++) {
        item.push(<Pagination.Item key= {i}onClick={(e)=>{}}>{i}</Pagination.Item>)
        
      }
    },[responseMovies]);
    return (
        <>
            <Pagination>
                <Pagination.Prev />

                <Pagination.Next />
            </Pagination>
        </>
    )
}
