import React from "react";
import { Container } from "react-bootstrap";
import Repos from "./Repos";
// import BusinessCard from "../components/BusinessCard";

export default function Home(){
    return (
        <Container fluid className="p-0">
            <Repos />
            {/* <BusinessCard /> */}
        </Container>
    );
}