import{newE2EPage}from"@stencil/core/testing";import{setResponses}from"../../../../../testing";describe("sc-dashboard-customer-details",(()=>{it("renders",(async()=>{const s=await newE2EPage();setResponses([{path:"/surecart/v1/customers",data:{}}],s),await s.setContent("<sc-dashboard-customer-details></sc-dashboard-customer-details>");const e=await s.find("sc-dashboard-customer-details");expect(e).toHaveClass("hydrated")}))}));