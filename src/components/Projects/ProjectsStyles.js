import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width:90%;
    max-height:30%;
  }
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  font-weight: 600;
  font-size: 1.2em;
  padding-top: 10px;
  
`;

export const HeaderThree = styled.h3`
  font-weight: 600;
  letter-spacing: 2px;
  color: #fff;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #fff;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#080808;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #e0e0e0;
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(158,158,158,1) 100%);
border-radius: 15px;
transition: 0.5s;
&:hover{
  color: #fff;
  background: linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(158,158,158,1) 100%);
}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #99baff;
background: -webkit-linear-gradient(#eee, #333);
background: -webkit-linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(252,176,69,1) 52%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
font-weight: 600;
font-size: 1.5rem;
`