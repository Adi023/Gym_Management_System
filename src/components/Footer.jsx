import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="text-center text-lg-start bg-body-tertiary text-muted" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                    <div className="me-5 d-none d-lg-block">
                        <div className="text-center p-4" >
                            © 2024 Copyright:
                            <a className="text-reset fw-bold" href="/">GMS.com</a> </div>
                    </div>

                    <div>
                        <a href="/" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </section>
            </footer>
            <br/>
        </div>
    )
}
