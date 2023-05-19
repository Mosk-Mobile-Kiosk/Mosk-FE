import React from "react"
import { Button } from "@material-ui/core"
import * as S from "./style"

function Category({ items, selectedCategory, onChange }) {
  return (
    <S.CategoryWrapper>
      {items.map((category) => (
        <Button
          key={category.id}
          style={{
            fontSize: "15px",
            fontWeight: "bold",
            // border: "1px outset black ",
            margin: "5px",
            // marginTop: "50px",
          }}
          onClick={() => onChange(category.id)}
        >
          {category.category}
        </Button>
      ))}
    </S.CategoryWrapper>
  )
}

export default Category
