import CMS from "netlify-cms"

import AboutPagePreview from "./preview-templates/AboutPagePreview"
import BlogPostPreview from "./preview-templates/BlogPostPreview"
import ProductPagePreview from "./preview-templates/ProductPagePreview"
import TelephelyekPagePreview from "./preview-templates/TelephelyekPagePreview"

CMS.registerPreviewTemplate("about", AboutPagePreview)
CMS.registerPreviewTemplate("products", ProductPagePreview)
CMS.registerPreviewTemplate("blog", BlogPostPreview)
CMS.registerPreviewTemplate("telephelyek", TelephelyekPagePreview)
