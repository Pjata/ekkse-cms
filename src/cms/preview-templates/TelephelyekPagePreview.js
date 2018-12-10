import React from "react"
import PropTypes from "prop-types"
import { TelephelyekPageTemplate } from "../../templates/telephelyek-page"

const ProductPagePreview = ({ entry, getAsset }) => {
  return (
    <TelephelyekPageTemplate
      image={entry.getIn(["data", "image"])}
      title={entry.getIn(["data", "title"])}
      heading={entry.getIn(["data", "heading"])}
      description={entry.getIn(["data", "description"])}
    />
  )
}

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
}

export default ProductPagePreview
