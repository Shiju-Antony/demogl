import{newSpecPage}from"@stencil/core/testing";import{ScProductText}from"../sc-product-text";describe("sc-product-text",(()=>{it("renders",(async()=>{const t=await newSpecPage({components:[ScProductText],html:"<sc-product-text></sc-product-text>"});expect(t.root).toEqualHtml("\n      <sc-product-text>\n        <mock:shadow-root>\n          <slot></slot>\n        </mock:shadow-root>\n      </sc-product-text>\n    ")}))}));