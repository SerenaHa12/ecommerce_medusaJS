# 1.Setup

    Step 1: Tạo DB bằng postgres server
        - Tải PostgreSQL server ver 16.1
        - Tạo DB

    Step 2: Chạy lệnh
        - npx create-medusa-app@latest

        
        - cd to project folder (ex: [project-name] not [project-name]storefornt) and run medusa migrate command 
            - [npx medusa migrations run]
        and seed command:
            - nhớ cd backend
            - [npx @medusajs/medusa-cli@latest seed -f ./data/seed.json]

        - run medusa develop to enter the admin side
            - [npx medusa develop]

        - run [project-name]-storefront to enter the customer side

# Note
    - Momo:
        - https://github.com/momo-wallet/payment/blob/master/nodejs/CollectionLink.js
        - https://developers.momo.vn/v3/docs/payment/api/collection-link
