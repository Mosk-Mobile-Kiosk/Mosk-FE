import React, { useState } from "react"
import { Container, Button, Modal, Checkbox, FormControlLabel } from "@material-ui/core"
import * as S from "./style"

function Product({ name, price, description, options, addToCart }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState([])

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedOptions([])
  }

  const handleOptionChange = (option) => {
    const isSelected = selectedOptions.includes(option)

    if (isSelected) {
      setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption !== option))
    } else {
      setSelectedOptions([...selectedOptions, option])
    }
  }

  const handleAddToCart = () => {
    const item = {
      name: name,
      price: price,
      description: description,
      options: selectedOptions,
    }

    addToCart(item)
  }

  return (
    <Container>
      <S.ProductWrapper onClick={handleOpenModal}>
        <S.ProductName>
          {name}
          <br />
          {price}원
        </S.ProductName>
        <S.ProductImg src="/img/logo.png" size={30} />
      </S.ProductWrapper>

      <Modal open={modalOpen} onClose={handleCloseModal}>
        <S.ModalWrapper>
          <h2 style={{ textAlign: "center", fontSize: "20px", padding: "15px" }}>{name}</h2>
          <p style={{ textAlign: "center" }}>{description}</p>
          {options && options.length > 0 && (
            <>
              <h1>- 옵션 -</h1>
              {options.map((option) => (
                <FormControlLabel
                  key={option}
                  control={
                    <Checkbox checked={selectedOptions.includes(option)} onChange={() => handleOptionChange(option)} />
                  }
                  label={option}
                />
              ))}
            </>
          )}
          {!options || (options.length === 0 && <p>사용 가능한 옵션이 없습니다.</p>)}
          <S.ModalButtonWrapper>
            <Button onClick={handleAddToCart}>장바구니</Button>
            <Button onClick={handleCloseModal}>닫기</Button>
          </S.ModalButtonWrapper>
        </S.ModalWrapper>
      </Modal>
    </Container>
  )
}

export default Product
