import { Card, Container, Row, Col, Button } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


const SingleMovie = (props) => {

    const navigate = useNavigate()
    const [movies, setMovies] = useState([])


    useEffect(() => {
        fetchMovies();
    })


    const fetchMovies = async () => {
        try {
            const url = `http://www.omdbapi.com/?apikey=5246caa7&s=${props.name}`

            const response = await fetch(url)

            if (response.ok) {
                const data = await response.json()
                setMovies(data.Search)
            } else {
                const message = await response.text()
                setMovies({ movies })
            }
        } catch (error) {
            setMovies({ movies })
        }
    }


    return (
        <div>
            <h3 className="heading">{props.title} Gallery</h3>
            <Container>
                <Row>

                    {movies.slice(0, 8).map(movie => (
                        <Col sm={6} md={3} key={movie.imdbID}>
                            <Card className="Cards" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src={movie.Poster} />
                                <Button variant="light" onClick={() => navigate('/MovieDetails/' + movie.imdbID)}>Get Details</Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}



export default SingleMovie