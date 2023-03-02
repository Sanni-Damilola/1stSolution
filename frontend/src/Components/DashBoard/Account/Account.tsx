import React from 'react';
import styled from 'styled-components'
import {BsPerson} from "react-icons/bs"
import pic from "./images/piggy.png"
import pic2 from "./images/avatar.png"
const Homepage = () => {
  return (
    <div>
      <Container>
        <Left></Left>


        <Right>
          <Div1>
           <Hold1>
           <h1>My Account</h1> <br /><span>Chinemeremerem</span>
            <Img> <img src={pic} alt="" /></Img>
           </Hold1>
         
         <Hold2>
         <Card>
             <Icon> <BsPerson/></Icon>
            <Span>Todays Rates</Span>
            </Card>

            <Card>
             <Icon> <BsPerson/></Icon>
            <Span>Todays Rates</Span>
            </Card>

            <Card>
             <Icon> <BsPerson/></Icon>
            <Span>Todays Rates</Span>
            </Card>

            <Card>
             <Icon> <BsPerson/></Icon>
            <Span>Todays Rates</Span>
            </Card>

            <Card>
             <Icon> <BsPerson/></Icon>
            <Span>Todays Rates</Span>
            </Card>

            <Card>
             <Icon> <BsPerson/></Icon>
            <Span>Todays Rates</Span>
            </Card>
            <Card>
             <Icon> <BsPerson/></Icon>
            <Span>Todays Rates</Span>
            </Card>
            <Card>
             <Icon> <BsPerson/></Icon>
            <Span>Todays Rates</Span>
            </Card>
            <Card>
             <Icon> <BsPerson/></Icon>
            <Span>Todays Rates</Span>
            </Card>
            <Card>
             <Icon> <BsPerson/></Icon>
            <Span>Todays Rates</Span>
            </Card>

         </Hold2>
          </Div1>



          <Div2>
                    <Up1>
                <Img2><img src={pic2} alt="" /></Img2>
                  <Text2>Judith Chinemerem ugbo</Text2>
                </Up1>

                <Down2>
                  <Box1>

                    <Card1>
                      <h3>73000987654</h3>
                      <span>Flex Number by Wema</span>
                    </Card1>

                    <Card1>
                      <h3>73000987654</h3>
                      <span>Flex Number by Wema</span>
                    </Card1>

                    <Card1>
                      <h3>73000987654</h3>
                      <span>Flex Number by Wema</span>
                    </Card1>

                    <Card1>
                      <h3>73000987654</h3>
                      <span>Flex Number by Wema</span>
                    </Card1>

                  </Box1>
                  
                  <Box2></Box2>
                </Down2>
          </Div2>
        </Right>
      </Container>
    </div>
  )
}

export default Homepage


const Card1 = styled.div`
width: 200px;
height: 70px;
border: 1px solid lightgray;
box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
margin:20px;
border-radius: 5px 5px 5px 0px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom:10px;
`
const Box1 = styled.div`
width: 100%;
height: 60px;
display: flex;
flex-wrap: wrap;
`
const Box2 = styled.div``
const Img2 = styled.div`
width: 300x;
height: 100px;
/* background: white; */

img{
  width: 100px;
  height: 100px;
  object-fit: contain;
}
`
const Text2 = styled.div`
font-size: 25px;
font-weight: bold;
margin: 0;
`
const Up1 = styled.div`
width: 500px;
/* background-color:red; */

display: flex;
flex-direction: column;
align-items: center;
margin-top:-100px;
`
const Down2 = styled.div`
width: 100%;
/* background-color: blue; */
`


const Hold1 = styled.div`
h1{
  margin: 0;
  margin-top: 20px;
  line-height:0.5rem;

  
}

span{
font-weight: bold;

}
`
const Hold2 = styled.div``
const Span = styled.div`
  margin-bottom: 5px;
  font-weight: 300px;
  font-size: 13px;
`
const Icon = styled.div`
margin-left:20px;
margin-right: 10px;
font-size:18px;
`
const Card = styled.div`
width: 250px;
height: 50px;
display: flex;
/* justify-content: center; */
align-items: center;
margin-top: 20px;
border: 1px solid lightgray;
border-radius: 5px 5px 5px 0px;
`
const Img = styled.div`
width: 300px;
height: 100px;
/* background-color: red; */
margin-bottom: 50px;
margin-top: 30px;

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`
const Div2 = styled.div`
width: 500px;
height: 600px;
/* background-color: green; */
margin-left:10px;
display: flex;
flex-direction: column;
/* align-items: center; */
justify-content: center;
`
const Div1 = styled.div`
width: 350px;
background-color: white;`


const Right = styled.div`
width: calc(100% - 260px);
display: flex;
justify-content: space-around;
padding: 20px;

/* background-color:red; */

`
const Left = styled.div`
width: 260px;
/* background: red; */
`
const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
/* height: 500px; */
`
