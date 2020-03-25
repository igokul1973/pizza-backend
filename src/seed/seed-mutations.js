export default /* GraphQL */ `
	mutation {
		pc1: CreateProductCategory(name: "pizza") {
			name
		}
		pc2: CreateProductCategory(name: "soft drink") {
			name
		}

		p1: CreateProduct(
			id: "p1"
			name: "Pizza Margerheta"
			imgUrl: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg"
			price: 20.2
			description: "Excellent pizza exclusively for you"
			status: available
			createdAt: { formatted: "2020-03-19T13:11:01.357Z" }
			updatedAt: { formatted: "2020-03-19T13:11:01.357Z" }
		) {
			id
			name
		}
		p2: CreateProduct(
			id: "p2"
			name: "Chili pizza"
			imgUrl: "https://cdn.pixabay.com/photo/2014/05/18/11/25/pizza-346985_960_720.jpg"
			price: 18.2
			description: "Hot and tasty - for those from Mexico or environs"
			status: available
			createdAt: { formatted: "2020-03-19T13:11:01.357Z" }
			updatedAt: { formatted: "2020-03-19T13:11:01.357Z" }
		) {
			id
			name
		}
		p3: CreateProduct(
			id: "p3"
			name: "Pizza Bianca"
			imgUrl: "https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg"
			price: 19.2
			description: "Savory piece of art with tomatoes and our home-made cheese"
			status: available
			createdAt: { formatted: "2020-03-19T13:11:01.357Z" }
			updatedAt: { formatted: "2020-03-19T13:11:01.357Z" }
		) {
			id
			name
		}
		p4: CreateProduct(
			id: "p4"
			name: "Beefy monster"
			imgUrl: "https://cdn.pixabay.com/photo/2017/09/30/15/10/pizza-2802332_960_720.jpg"
			price: 33.7
			description: "Beef and black olives pizza topped with spinach"
			status: available
			createdAt: { formatted: "2020-03-19T13:11:01.357Z" }
			updatedAt: { formatted: "2020-03-19T13:11:01.357Z" }
		) {
			id
			name
		}
		p5: CreateProduct(
			id: "p5"
			name: "Sunny pizza"
			imgUrl: "https://cdn.pixabay.com/photo/2016/01/19/18/01/pizza-1150031_960_720.jpg"
			price: 25.2
			description: "Margerheta-style pizza topped with eggs and basil"
			status: available
			createdAt: { formatted: "2020-03-19T13:11:01.357Z" }
			updatedAt: { formatted: "2020-03-19T13:11:01.357Z" }
		) {
			id
			name
		}
		p6: CreateProduct(
			id: "p6"
			name: "Pizza Cappriciosa"
			imgUrl: "https://cdn.pixabay.com/photo/2016/04/21/22/50/pizza-1344720_960_720.jpg"
			price: 21.8
			description: "Salami and bacon pizza with blue cheeze"
			status: available
			createdAt: { formatted: "2020-03-19T13:11:01.357Z" }
			updatedAt: { formatted: "2020-03-19T13:11:01.357Z" }
		) {
			id
			name
		}
		p7: CreateProduct(
			id: "p7"
			name: "Pizza Neopolitana"
			imgUrl: "https://cdn.pixabay.com/photo/2018/04/11/03/13/food-3309418_960_720.jpg"
			price: 17.0
			description: "Vegitarian pizza with spicy flavour"
			status: available
			createdAt: { formatted: "2020-03-19T13:11:01.357Z" }
			updatedAt: { formatted: "2020-03-19T13:11:01.357Z" }
		) {
			id
			name
		}
		p8: CreateProduct(
			id: "p8"
			name: "Spinach pizza"
			imgUrl: "https://cdn.pixabay.com/photo/2016/06/08/00/03/pizza-1442945_960_720.jpg"
			price: 19.9
			description: "Spinatch pizza with sun-dried tomatoes"
			status: available
			createdAt: { formatted: "2020-03-19T13:11:01.357Z" }
			updatedAt: { formatted: "2020-03-19T13:11:01.357Z" }
		) {
			id
			name
		}
		p9: CreateProduct(
			id: "p9"
			name: "Coca-cola"
			imgUrl: "https://cdn.pixabay.com/photo/2017/02/25/23/12/coca-cola-2099000_960_720.jpg"
			price: 3.0
			description: "Coca-cola, bottle, 0.5l"
			status: available
			createdAt: { formatted: "2020-03-19T13:11:01.357Z" }
			updatedAt: { formatted: "2020-03-19T13:11:01.357Z" }
		) {
			id
			name
		}
		p10: CreateProduct(
			id: "p10"
			name: "Fanta"
			imgUrl: "https://cdn.pixabay.com/photo/2013/03/01/18/48/aluminum-87987_960_720.jpg"
			price: 2.0
			description: "Fanta, can, 0.3l"
			status: available
			createdAt: { formatted: "2020-03-19T13:11:01.357Z" }
			updatedAt: { formatted: "2020-03-19T13:11:01.357Z" }
		) {
			id
			name
		}

		apc1: AddProductCategories(from: { id: "p1" }, to: { name: "pizza" }) {
			from {
				id
			}
		}
		apc2: AddProductCategories(from: { id: "p2" }, to: { name: "pizza" }) {
			from {
				id
			}
		}
		apc3: AddProductCategories(from: { id: "p3" }, to: { name: "pizza" }) {
			from {
				id
			}
		}
		apc4: AddProductCategories(from: { id: "p4" }, to: { name: "pizza" }) {
			from {
				id
			}
		}
		apc5: AddProductCategories(from: { id: "p5" }, to: { name: "pizza" }) {
			from {
				id
			}
		}
		apc6: AddProductCategories(from: { id: "p6" }, to: { name: "pizza" }) {
			from {
				id
			}
		}
		apc7: AddProductCategories(from: { id: "p7" }, to: { name: "pizza" }) {
			from {
				id
			}
		}
		apc8: AddProductCategories(from: { id: "p8" }, to: { name: "pizza" }) {
			from {
				id
			}
		}
		apc9: AddProductCategories(
			from: { id: "p9" }
			to: { name: "soft drink" }
		) {
			from {
				id
			}
		}
		apc10: AddProductCategories(
			from: { id: "p10" }
			to: { name: "soft drink" }
		) {
			from {
				id
			}
		}

		c1: CreateCustomer(
			id: "c1"
			name: "Will Smith"
			phone: "3234321234"
			email: "will@example.com"
			password: "somerandompass"
			createdAt: { formatted: "2020-02-19T13:11:01.357Z" }
			updatedAt: { formatted: "2020-02-19T13:11:01.357Z" }
		) {
			id
			name
		}

		a1: CreateCustomerAddress(
			id: "a1"
			street: "313 N 1st St W, apt.2M"
			city: "Missoula"
			state: "MT"
			zip: "32342"
			addressCategory: home
		) {
			id
			street
		}

		aca1: AddCustomerAddresses(from: { id: "c1" }, to: { id: "a1" }) {
			from {
				id
			}
		}

		# Create order 1
		o1: CreateOrder(
			id: "o1"
			details: "Add more pepperoni"
			status: delivered
			createdAt: { formatted: "2020-02-19T13:11:01.357Z" }
			updatedAt: { formatted: "2020-02-19T13:11:01.357Z" }
		) {
			id
			status
		}
		oi1: CreateOrderItem(
			id: "oi1"
			name: "Pizza Margerheta"
			price: 20.2
			quantity: 2
			productId: "p1"
		) {
			name
		}
		oi2: CreateOrderItem(
			id: "oi2"
			name: "Pizza Neopolitana"
			price: 17.0
			quantity: 1,
			productId: "p7"
		) {
			name
		}
		aooi1: AddOrderOrderItems(from: { id: "o1" }, to: { id: "oi1" }) {
			from {
				id
			}
		}
		aooi2: AddOrderOrderItems(from: { id: "o1" }, to: { id: "oi2" }) {
			from {
				id
			}
		}
		aoc1: AddOrderCustomer(from: { id: "c1" }, to: { id: "o1" }) {
			from {
				id
			}
		}

		c2: CreateCustomer(
			id: "c2"
			name: "Jenny Parker"
			phone: "3237751234"
			email: "jenny@bla.com"
			password: "somerandompass"
			createdAt: { formatted: "2020-02-29T13:11:01.357Z" }
			updatedAt: { formatted: "2020-02-29T13:11:01.357Z" }
		) {
			id
			name
		}

		a2: CreateCustomerAddress(
			id: "a2"
			street: "Food Truck - Farmers Market"
			city: "Missoula"
			state: "MT"
			zip: "32387"
			addressCategory: office
		) {
			id
			street
		}

		aca2: AddCustomerAddresses(from: { id: "c2" }, to: { id: "a2" }) {
			from {
				id
			}
		}

		# Create order 2
		o2: CreateOrder(
			id: "o2"
			details: "Extra napkins"
			status: delivered
			createdAt: { formatted: "2020-02-29T13:11:01.357Z" }
			updatedAt: { formatted: "2020-02-29T13:11:01.357Z" }
		) {
			id
			status
		}
		oi3: CreateOrderItem(
			id: "oi3"
			name: "Sunny pizza"
			price: 25.2
			quantity: 2
			productId: "p5"
		) {
			name
		}
		aooi3: AddOrderOrderItems(from: { id: "o2" }, to: { id: "oi3" }) {
			from {
				id
			}
		}
		oi4: CreateOrderItem(
			id: "oi4"
			name: "Pizza Neopolitana"
			price: 17.0
			quantity: 1
			productId: "p7"
		) {
			name
		}
		aooi4: AddOrderOrderItems(from: { id: "o2" }, to: { id: "oi4" }) {
			from {
				id
			}
		}
		aoc2: AddOrderCustomer(from: { id: "c2" }, to: { id: "o1" }) {
			from {
				id
			}
		}
	}
`;
