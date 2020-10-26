import Link from 'next/link'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { Image, Product, Title, Description, DescriptionText, Comments, Votes } from './styles'

const ProductDetails = ({ product }) => {
    const { id, comments, created, description, name, urlImage, votes } = product

    return (
        <Product>
            <Description>
                <div>
                    <Image src={urlImage} />
                </div>
                <div>
                    <Link href="/products/[id]" as={`/products/${id}`}>
                        <Title>{name}</Title>
                    </Link>

                    <DescriptionText>{description}</DescriptionText>

                    <Comments>
                        <div>
                            <img src='/static/img/commentary.png' />
                            <p>{comments.length} Comments</p>
                        </div>
                    </Comments>

                    <p>Published: { formatDistanceToNow(new Date(created)) }</p>
                </div>
            </Description>

            <Votes>
                <div> &#9650; </div>
                <p>{votes}</p>
            </Votes>
        </Product>
    )
}

export default ProductDetails