import styled from "styled-components";
import dayjs from "dayjs";
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const Head = styled.div`
    background-color: grey;
    padding: .5em;
    border: 1em;
    margin: .5em;
    
    display: flex;
    flex-direction: row;

`


const Paragraph = styled.p`
    margin: 0;
    padding: 1em;
   `
const List = styled.div`
    display: flex;
`
const CommentCard = (props) => {

    const newDate = dayjs(props.datePosted).fromNow();
    console.log(newDate);

    const Image = styled.img`
    width: 10em;
    height: 10em;
    margin-right: 1em;
    `;

    console.log(Image.width)


    return (
        <Head>
            <Image src={props.imageUrl}/>
            <div>
                <p>{props.userName}</p>
                <p>{props.children}</p>
                <List>
                    <Paragraph>Like</Paragraph>
                    <Paragraph>Reply</Paragraph>
                    <Paragraph>{newDate}</Paragraph>
                </List>
            </div>
        </Head>
        
    )
}
export default CommentCard