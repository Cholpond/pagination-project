import { Pagination,PaginationItem, PaginationLink } from 'reactstrap';


const PageComponent = ({changePage, data}) => {
  return(
    <Pagination className='pagination'>
    {
        data.map(item => {
          return(
       <>
          <PaginationItem>
            <PaginationLink 
            onClick={changePage}
            href="#">
              1
            </PaginationLink>
          </PaginationItem>
       </>
            
          )

        })
}
</Pagination>
   
  )}

  export default PageComponent;
