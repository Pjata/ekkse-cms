import React, { PureComponent } from "react"
import Swiper from "react-id-swiper"
import cover from "../img/cover0.jpg"
import styled from "styled-components"
const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Image = styled.div`
  height: 350px;
  width: 100%;
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
`
class EKKSECarousel extends PureComponent {
  render() {
    const params = {
      spaceBetween: 30,
      centeredSlides: true,
      effect: "fade",
      slidesPerView: "auto",
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    }
    return (
      <div style={{}}>
        <Swiper {...params}>
          <div>
            <Slide>
              <Image src={cover} />
            </Slide>
          </div>
          <div>
            <Slide>
              <Image src={"http://ose.hu/app/images/header_bg_IMG_7492.jpg"} />
            </Slide>
          </div>
          <div>
            <Slide>
              <Image src={cover} />
            </Slide>
          </div>
          <div>
            <Slide>
              <Image src={"http://ose.hu/app/images/header_bg_IMG_7492.jpg"} />
            </Slide>
          </div>
        </Swiper>
      </div>
    )
  }
}

export default EKKSECarousel
