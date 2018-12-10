import React from "react"
import PropTypes from "prop-types"
import { TelephelyekPageTemplate } from "../../templates/telephelyek-page"

const ProductPagePreview = ({ entry, getAsset }) => {
  const entryTelephelyek = entry.getIn(["data", "telephelyek"])
  const telephelyek = entryTelephelyek ? entryTelephelyek.toJS() : []
  return <TelephelyekPageTemplate telephelyek={telephelyek} />
}

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
}

export default ProductPagePreview
