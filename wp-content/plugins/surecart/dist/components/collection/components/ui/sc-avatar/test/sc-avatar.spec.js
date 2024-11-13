import{newSpecPage}from"@stencil/core/testing";import{ScAvatar}from"../sc-avatar";describe("sc-avatar",(()=>{it("renders",(async()=>{const a=await newSpecPage({components:[ScAvatar],html:"<sc-avatar></sc-avatar>"});expect(a.root).toMatchSnapshot()})),it("renders initials",(async()=>{const a=await newSpecPage({components:[ScAvatar],html:'<sc-avatar initials="AG"></sc-avatar>'});expect(a.root).toMatchSnapshot()})),it("has square shape",(async()=>{const a=await newSpecPage({components:[ScAvatar],html:'<sc-avatar shape="square"></sc-avatar>'});expect(a.root).toMatchSnapshot()})),it("has rounded shape",(async()=>{const a=await newSpecPage({components:[ScAvatar],html:'<sc-avatar shape="rounded"></sc-avatar>'});expect(a.root).toMatchSnapshot()})),it("has a label",(async()=>{const a=await newSpecPage({components:[ScAvatar],html:'<sc-avatar label="Avatar label"></sc-avatar>'});expect(a.root).toMatchSnapshot()})),it("has an image",(async()=>{const a=await newSpecPage({components:[ScAvatar],html:'<sc-avatar image="https://s.gravatar.com/avatar/286186a3bf41fb8452d02941833caa24?s=80"></sc-avatar>'});expect(a.root).toMatchSnapshot()}))}));