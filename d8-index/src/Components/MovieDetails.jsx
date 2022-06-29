import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { Container, Row, Col, Card, Badge, ListGroup, ListGroupItem, Button } from 'react-bootstrap'


const MovieDetails = () => {

    const [selectedMovie, setSelectedMovie] = useState([])

    const params = useParams()
    console.log(params)

    useEffect(() => {
        getMovieDetails()
    }, [])

    const getMovieDetails = async () => {
        try {
            let response = await fetch("http://www.omdbapi.com/?apikey=5246caa7&i=" + params.imdbID)
            if (response.ok) {
                const parsedBody = await response.json();
                setSelectedMovie(parsedBody);
            }

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Container>
            <Row className="justify-content-center my-3 ">
                <Col className="col-10" style={{ display: "flex", justifyContent: "center" }}>
                    <Card >
                        <Card.Img variant="top" src={selectedMovie.Poster} />
                        <Card.Body>
                            <Card.Title className="text-color">{selectedMovie.Title} </Card.Title>
                            <Badge variant="warning">imdb Rating: {selectedMovie.imdbRating}</Badge>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className="text-color">Year:
                                {selectedMovie.Year}
                            </ListGroupItem>
                            <ListGroupItem className="text-color">Actors: {selectedMovie.Actors}</ListGroupItem>
                            <ListGroupItem className="text-color">Money generated:  <Badge pill variant="success">
                                {selectedMovie.BoxOffice}
                            </Badge></ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Link to="/">
                                <Button variant="success" size="lg" block>Home</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}


export default MovieDetails