import{newE2EPage}from"@stencil/core/testing";describe("sc-order-confirmation",(()=>{it("renders",(async()=>{const t=await newE2EPage();await t.setContent("<sc-order-confirmation></sc-order-confirmation>");const a=await t.find("sc-order-confirmation");expect(a).toHaveClass("hydrated")})),it("appends manual instructions if present in order",(async()=>{const t=await newE2EPage();await t.setContent("<sc-order-confirmation><sc-order-confirmation-details></sc-order-confirmation-details></sc-order-confirmation>"),(await t.find("sc-order-confirmation")).setProperty("order",{manual_payment:!0}),await t.waitForChanges();let a=await t.find("sc-order-manual-instructions");expect(a).toHaveClass("hydrated")}))}));