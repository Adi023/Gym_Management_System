import React from 'react'
import { Container, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default function PaginationBar({ postContent, handlePageChange }) {
    const startPage = Math.max(0, postContent.pageNumber - 1);
    const endPage = Math.min(postContent.totalPages - 1, startPage + 2);
    
    return (
        <div className='row'>
            <Container className='mt-3'>
                <Pagination aria-label="Page navigation example" className='col-md-4 ms-auto' size="md">
                    <PaginationItem >
                        <PaginationLink onClick={() => handlePageChange(0)} disabled={postContent.pageNumber === 0}>
                            First
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={() => handlePageChange(postContent.pageNumber - 1)} previous disabled={postContent.pageNumber === 0}>
                            Previous
                        </PaginationLink>
                    </PaginationItem>
                    {/* Start */}


                    {postContent.pageNumber > 1 && (
                        <PaginationItem disabled>
                            <PaginationLink>...</PaginationLink>
                        </PaginationItem>
                    )}

                    {[...Array(endPage - startPage + 1)].map((_, index) => {
                        const pageNumber = startPage + index;
                        return (
                            <PaginationItem key={pageNumber} active={pageNumber === postContent.pageNumber}>
                                <PaginationLink onClick={() => handlePageChange(pageNumber)}>
                                    {pageNumber + 1}
                                </PaginationLink>
                            </PaginationItem>
                        );
                    })}

                    {postContent.pageNumber + 3 < postContent.totalPages && (
                        <PaginationItem disabled>
                            <PaginationLink>...</PaginationLink>
                        </PaginationItem>
                    )}

                    {postContent.pageNumber + 2 < postContent.totalPages && (
                        <PaginationItem >
                            <PaginationLink onClick={() => handlePageChange(postContent.totalPages - 1)} disabled={postContent.pageNumber === postContent.totalPages - 1}>
                                {postContent.totalPages}</PaginationLink>
                        </PaginationItem>
                    )}

                    {/* end */}
                    <PaginationItem>
                        <PaginationLink onClick={() => handlePageChange(postContent.pageNumber + 1)} next disabled={postContent.pageNumber === postContent.totalPages - 1}>
                            Next
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={() => handlePageChange(postContent.totalPages - 1)} disabled={postContent.pageNumber === postContent.totalPages - 1}>
                            Last
                        </PaginationLink>
                    </PaginationItem>
                </Pagination>
            </Container>
        </div>
    )
}

