import React from 'react'

export default function ErrorPage() {
 const reloadPage = () => {
    window.location.reload();
  };
  return (
    <div className="container text-center mt-5">
        <h1>Error</h1>
        <p>Something went wrong.</p>
        <button className="btn btn-primary" onClick={reloadPage}>
          Reload Page
        </button>
      </div>
  )
}
