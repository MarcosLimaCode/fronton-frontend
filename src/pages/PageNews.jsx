import styled from "styled-components";
import Title from "../components/Title";

export default function PageNews() {
  return (
    <Container>
      <Header>
        <Title />
      </Header>
      <Body>
        <NewsTitle>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          <h2>Data de publicação: 20 de novembro às 16:36</h2>
        </NewsTitle>
        <Text>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
            volutpat tortor. In dolor tellus, consectetur eget aliquam ut,
            posuere faucibus lectus. Vestibulum consequat feugiat metus, quis
            fermentum mauris sollicitudin at. Vivamus turpis velit, accumsan
            bibendum magna ut, rhoncus mollis felis. Ut felis dui, convallis nec
            pulvinar sit amet, scelerisque eu sem. Morbi rhoncus diam vehicula
            lacus gravida, consequat commodo felis laoreet. Integer diam dui,
            auctor vel nibh non, mattis porta nulla. Ut et hendrerit urna. In
            hac habitasse platea dictumst. Nunc lacinia in magna eu condimentum.
          </p>
          <p>
            Nulla ac ultrices quam. In quis purus ut turpis porta facilisis quis
            id ante. Nulla eleifend imperdiet mauris, dictum vehicula magna
            maximus vitae. Nulla lacus orci, sodales id libero a, luctus rutrum
            turpis. Nunc nec turpis at mauris hendrerit lobortis sed eu neque.
            Donec ac ex eu ligula accumsan sollicitudin. Nam ut convallis
            mauris. Donec lacinia, massa ut laoreet volutpat, ipsum magna
            pellentesque dui, a ultrices quam nibh vitae risus. Vivamus ac
            hendrerit mauris, vulputate scelerisque erat.
          </p>
          <p>
            Aliquam tempor a dui eu tempus. Integer dapibus orci sed consequat
            convallis. Aenean tempor, ante quis vestibulum accumsan, ex enim
            vestibulum neque, porttitor dignissim ante odio vitae nunc.
            Suspendisse a blandit orci. Curabitur dui nisl, tempor finibus erat
            sed, convallis venenatis magna. Mauris non diam mauris. Nulla
            accumsan finibus lorem, a interdum turpis. Nunc condimentum placerat
            fringilla. Etiam auctor mauris a elit auctor, non tristique ligula
            interdum. Donec scelerisque, nibh non egestas ornare, leo metus
            aliquet diam, non vestibulum tellus dui sed tortor. Fusce luctus leo
            vitae ex tincidunt, in porttitor sapien blandit.
          </p>
          <p>
            In bibendum tempor suscipit. Fusce egestas, orci eget sollicitudin
            tristique, massa enim faucibus mi, a sagittis velit ante sit amet
            sapien. Fusce quis augue risus. Nam at dolor maximus, egestas augue
            quis, vulputate lorem. Etiam congue ornare aliquam. Aliquam bibendum
            porttitor cursus. Cras lobortis, risus a dictum consequat, velit
            ligula ultrices felis, commodo dictum enim felis a libero.
            Suspendisse elementum fermentum diam. Vestibulum aliquam nisi at
            lorem aliquam volutpat. Vestibulum dapibus viverra nisi, sed
            ultrices lacus laoreet at. Sed convallis, purus in rhoncus auctor,
            magna velit molestie tellus, sit amet laoreet sapien nisi sed massa.
            Nullam neque eros, cursus sit amet scelerisque sed, gravida nec dui.
            Aliquam non urna quis urna porta commodo. Nam tincidunt pellentesque
            augue, vel aliquet est ullamcorper a. Nulla hendrerit rutrum sapien.
            Maecenas in mauris et lectus aliquam malesuada.
          </p>
        </Text>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #202020;
`;

const Header = styled.div`
  height: 70px;
  width: 821px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Body = styled.div`
  height: max-content;
  width: 821px;
  font-family: "Merriweather", serif;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-radius: 8px;
  background-color: #282828;
`;

const NewsTitle = styled.div`
  margin-top: 70px;
  margin-left: 84px;
  margin-right: 84px;
  margin-bottom: 24px;

  h1 {
    font-style: italic;
    font-size: 15px;
    color: white;
    margin-bottom: 6px;
  }

  h2 {
    font-family: "Chivo Mono", monospace;
    font-size: 12px;
    color: #656363;
  }
`;

const Text = styled.div`
  margin-left: 84px;
  margin-right: 84px;

  p {
    font-size: 12px;
    color: white;
    margin-bottom: 16px;
    line-height: 1.6;
  }
`;
