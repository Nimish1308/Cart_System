import React, { useEffect, useState } from 'react'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const Records = ({addToCart}) => {
    const [record, setRecord] = useState([]);
    const getRecord = async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products`);
            const store = res.data;
            setRecord(store);
            console.log(`All Record Fetched`);

        } catch (error) {
            console.error(`Failed To Fetch`);

        }
    }

    useEffect(()=>{
        getRecord();
    },[])
    return (
        <>
            <MDBRow className='row-cols-1 row-cols-md-3 g-4 container'>
                {
                    record.map((item, i) => (
                        <MDBCol key={i}>
                            <MDBCard className='h-100' style={{ margin: '20px' }}>
                                <MDBCardImage
                                    src={item.image}
                                    alt='...'
                                    position='top'
                                    style={{width:'200px',height:'200px'}}
                                />
                                <MDBCardBody>
                                    <MDBCardTitle>{item.title}</MDBCardTitle>
                                    <MDBCardText>
                                        This is a longer card with supporting text below as a natural lead-in to additional content.
                                        This content is a little bit longer.
                                    </MDBCardText>
                                    <MDBCardTitle>{item.price}</MDBCardTitle>
                                    <Button variant="success" onClick={()=>addToCart(item)}>ADD TO CART</Button>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))
                }

            </MDBRow>
        </>
    )
}

export default Records
