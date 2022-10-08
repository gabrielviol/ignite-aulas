import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {
    const { query } = useRouter()

    return(
        <ProductContainer>
            <ImageContainer>
                
            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, dolorem id explicabo in, reprehenderit repellendus iusto eum corrupti, fugit molestias recusandae deleniti eaque sit? Illo quae iusto quisquam ad temporibus?</p>

                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}