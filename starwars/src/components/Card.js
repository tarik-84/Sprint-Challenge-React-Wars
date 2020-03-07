import React from 'react';
import { CardTitle, CardText, Card, Col, CardBody } from 'reactstrap';




const NewCard = props => {
    return(
        <Col xs="12" md="6" xl="3">
          <Card>
            <CardBody>
               <CardTitle tag='h2'>Name: {props.name}</CardTitle>
              <CardText tag='h3'>Height: {props.height} cm</CardText>
              <CardText tag='h3'>Birthyear: {props.birth_year}</CardText>
              <CardText tag='h3'>Gender: {props.gender}</CardText>
              <CardText tag='h3'>Films: {props.films} </CardText>
            </CardBody>
          </Card>
        </Col>
    )
}

export default NewCard;