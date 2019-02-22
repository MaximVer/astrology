import React from 'react'
import * as contentful from "contentful";
import {data} from "../env";
import Container from "react-bootstrap/es/Container";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import Badge from "react-bootstrap/es/Badge";

const client = contentful.createClient({
    space: data.SPACE_ID,
    accessToken: data.ACCESS_TOKEN
});

class SubHeroSection extends React.Component {
    state = {
        sectionItem: [],
    };
    getSubHeroItems = () => {
        client.getEntries({
            content_type: 'subHeroSection',
        })
            .then((response) => {
                this.setState({sectionItem: response.items});
                console.log(this.state.sectionItem)
            })
            .catch((error) => {
                console.log("Error occurred while fetching Entries");
                console.error(error)
            })
    };

    constructor() {
        super();
        this.getSubHeroItems();
    }

    render() {
        return (
            <div style={styles.container}>
                <Container>
                    <Row>
                        {this.state.sectionItem.map(sectionItem => (
                            <Col sm key={sectionItem.sys.id}>
                                <h3>
                                    <Badge variant="primary">
                                        {sectionItem.fields.projectName.toString()}
                                    </Badge>
                                </h3>
                            </Col>
                        ))
                        }
                    </Row>
                </Container>
            </div>
        );

    }
}

const styles = {
    container: {
        backgroundColor: "#0fc0ef",
        padding: "30px"
    }
};
export default SubHeroSection;