-- public.aplication_booking definition

-- Drop table

-- DROP TABLE public.aplication_booking;

CREATE TABLE public.aplication_booking (
	booking_id serial4 NOT NULL,
	"name" varchar(30) NOT NULL,
	phone varchar(30) NOT NULL,
	date_hour timestamptz NOT NULL,
	diners_number int4 NOT NULL,
	CONSTRAINT aplication_booking_pkey PRIMARY KEY (booking_id)
);


-- public.aplication_jelpestcustomer definition

-- Drop table

-- DROP TABLE public.aplication_jelpestcustomer;

CREATE TABLE public.aplication_jelpestcustomer (
	customer_id serial4 NOT NULL,
	"DNI" varchar(9) NULL,
	"name" varchar(30) NULL,
	surname varchar(30) NULL,
	phone varchar(11) NULL,
	mail varchar(254) NULL,
	notes varchar(300) NULL,
	CONSTRAINT aplication_jelpestcustomer_pkey PRIMARY KEY (customer_id)
);


-- public.aplication_paymenttype definition

-- Drop table

-- DROP TABLE public.aplication_paymenttype;

CREATE TABLE public.aplication_paymenttype (
	payment_type_id serial4 NOT NULL,
	"type" varchar(30) NOT NULL,
	CONSTRAINT aplication_paymenttype_pkey PRIMARY KEY (payment_type_id)
);


-- public.aplication_producttype definition

-- Drop table

-- DROP TABLE public.aplication_producttype;

CREATE TABLE public.aplication_producttype (
	product_type_id serial4 NOT NULL,
	"type" varchar(30) NOT NULL,
	CONSTRAINT aplication_producttype_pkey PRIMARY KEY (product_type_id)
);


-- public.aplication_restaurant definition

-- Drop table

-- DROP TABLE public.aplication_restaurant;

CREATE TABLE public.aplication_restaurant (
	restaurant_id serial4 NOT NULL,
	"name" varchar(30) NOT NULL,
	customer_id int4 NOT NULL,
	CONSTRAINT aplication_restaurant_pkey PRIMARY KEY (restaurant_id),
	CONSTRAINT aplication_restauran_customer_id_8e05c4e2_fk_aplicatio FOREIGN KEY (customer_id) REFERENCES public.aplication_jelpestcustomer(customer_id) DEFERRABLE INITIALLY DEFERRED
);
CREATE INDEX aplication_restaurant_customer_id_8e05c4e2 ON public.aplication_restaurant USING btree (customer_id);


-- public.aplication_table definition

-- Drop table

-- DROP TABLE public.aplication_table;

CREATE TABLE public.aplication_table (
	table_id serial4 NOT NULL,
	table_number int4 NOT NULL,
	max_users int4 NOT NULL,
	restaurant_id int4 NOT NULL,
	CONSTRAINT aplication_table_pkey PRIMARY KEY (table_id),
	CONSTRAINT aplication_table_restaurant_id_table_number_f45d4386_uniq UNIQUE (restaurant_id, table_number),
	CONSTRAINT aplication_table_restaurant_id_1461fd12_fk_aplicatio FOREIGN KEY (restaurant_id) REFERENCES public.aplication_restaurant(restaurant_id) DEFERRABLE INITIALLY DEFERRED
);
CREATE INDEX aplication_table_restaurant_id_1461fd12 ON public.aplication_table USING btree (restaurant_id);


-- public.aplication_booking_table_id definition

-- Drop table

-- DROP TABLE public.aplication_booking_table_id;

CREATE TABLE public.aplication_booking_table_id (
	id bigserial NOT NULL,
	booking_id int4 NOT NULL,
	table_id int4 NOT NULL,
	CONSTRAINT aplication_booking_table_id_booking_id_table_id_48f36e0f_uniq UNIQUE (booking_id, table_id),
	CONSTRAINT aplication_booking_table_id_pkey PRIMARY KEY (id),
	CONSTRAINT aplication_booking_t_booking_id_50beabca_fk_aplicatio FOREIGN KEY (booking_id) REFERENCES public.aplication_booking(booking_id) DEFERRABLE INITIALLY DEFERRED,
	CONSTRAINT aplication_booking_t_table_id_780143de_fk_aplicatio FOREIGN KEY (table_id) REFERENCES public.aplication_table(table_id) DEFERRABLE INITIALLY DEFERRED
);
CREATE INDEX aplication_booking_table_id_booking_id_50beabca ON public.aplication_booking_table_id USING btree (booking_id);
CREATE INDEX aplication_booking_table_id_table_id_780143de ON public.aplication_booking_table_id USING btree (table_id);


-- public.aplication_product definition

-- Drop table

-- DROP TABLE public.aplication_product;

CREATE TABLE public.aplication_product (
	product_id serial4 NOT NULL,
	"name" varchar(70) NOT NULL,
	price numeric(6, 2) NOT NULL,
	description varchar(100) NOT NULL,
	image varchar(100) NULL,
	product_type_id int4 NOT NULL,
	sub_product int4 NULL,
	restaurant_id int4 NULL,
	CONSTRAINT aplication_product_pkey PRIMARY KEY (product_id),
	CONSTRAINT aplication_product_product_type_id_9be794b8_fk_aplicatio FOREIGN KEY (product_type_id) REFERENCES public.aplication_producttype(product_type_id) DEFERRABLE INITIALLY DEFERRED,
	CONSTRAINT aplication_product_restaurant_id_9d5c4f03_fk_aplicatio FOREIGN KEY (restaurant_id) REFERENCES public.aplication_restaurant(restaurant_id) DEFERRABLE INITIALLY DEFERRED,
	CONSTRAINT aplication_product_sub_product_23dffbd4_fk_aplicatio FOREIGN KEY (sub_product) REFERENCES public.aplication_product(product_id) DEFERRABLE INITIALLY DEFERRED
);
CREATE INDEX aplication_product_product_type_id_9be794b8 ON public.aplication_product USING btree (product_type_id);
CREATE INDEX aplication_product_restaurant_id_9d5c4f03 ON public.aplication_product USING btree (restaurant_id);
CREATE INDEX aplication_product_sub_product_23dffbd4 ON public.aplication_product USING btree (sub_product);


-- public.aplication_service definition

-- Drop table

-- DROP TABLE public.aplication_service;

CREATE TABLE public.aplication_service (
	service_id serial4 NOT NULL,
	total_amount numeric(12, 2) NOT NULL,
	diners_number int4 NOT NULL,
	"date" timestamptz NOT NULL,
	paid_out bool NOT NULL,
	notes varchar(280) NULL,
	table_id int4 NOT NULL,
	CONSTRAINT aplication_service_pkey PRIMARY KEY (service_id),
	CONSTRAINT aplication_service_table_id_49633db1_fk_aplicatio FOREIGN KEY (table_id) REFERENCES public.aplication_table(table_id) DEFERRABLE INITIALLY DEFERRED
);
CREATE INDEX aplication_service_table_id_49633db1 ON public.aplication_service USING btree (table_id);


-- public.aplication_order definition

-- Drop table

-- DROP TABLE public.aplication_order;

CREATE TABLE public.aplication_order (
	order_id serial4 NOT NULL,
	total_price numeric(5, 2) NULL,
	quantity int4 NOT NULL,
	status varchar(30) NOT NULL,
	product_id int4 NOT NULL,
	service_id int4 NOT NULL,
	order_date timestamptz NOT NULL,
	notes varchar(280) NULL,
	product_amount_paid int4 NOT NULL,
	CONSTRAINT aplication_order_pkey PRIMARY KEY (order_id),
	CONSTRAINT aplication_order_product_id_39d843ea_fk_aplicatio FOREIGN KEY (product_id) REFERENCES public.aplication_product(product_id) DEFERRABLE INITIALLY DEFERRED,
	CONSTRAINT aplication_order_service_id_c125d38c_fk_aplicatio FOREIGN KEY (service_id) REFERENCES public.aplication_service(service_id) DEFERRABLE INITIALLY DEFERRED
);
CREATE INDEX aplication_order_product_id_39d843ea ON public.aplication_order USING btree (product_id);
CREATE INDEX aplication_order_service_id_c125d38c ON public.aplication_order USING btree (service_id);


-- public.aplication_payment definition

-- Drop table

-- DROP TABLE public.aplication_payment;

CREATE TABLE public.aplication_payment (
	payment_id serial4 NOT NULL,
	amount_to_pay numeric(12, 2) NOT NULL,
	already_paid numeric(12, 2) NOT NULL,
	"date" time NOT NULL,
	payment_type_id int4 NOT NULL,
	service_id int4 NOT NULL,
	paid bool NOT NULL,
	CONSTRAINT aplication_payment_pkey PRIMARY KEY (payment_id),
	CONSTRAINT aplication_payment_payment_type_id_5219c4a9_fk_aplicatio FOREIGN KEY (payment_type_id) REFERENCES public.aplication_paymenttype(payment_type_id) DEFERRABLE INITIALLY DEFERRED,
	CONSTRAINT aplication_payment_service_id_3e07350f_fk_aplicatio FOREIGN KEY (service_id) REFERENCES public.aplication_service(service_id) DEFERRABLE INITIALLY DEFERRED
);
CREATE INDEX aplication_payment_payment_type_id_5219c4a9 ON public.aplication_payment USING btree (payment_type_id);
CREATE INDEX aplication_payment_service_id_3e07350f ON public.aplication_payment USING btree (service_id);


-- public.aplication_profile definition

-- Drop table

-- DROP TABLE public.aplication_profile;

CREATE TABLE public.aplication_profile (
	profile_id serial4 NOT NULL,
	restaurant_id int4 NULL,
	user_id int4 NOT NULL,
	CONSTRAINT aplication_profile_pkey PRIMARY KEY (profile_id),
	CONSTRAINT aplication_profile_user_id_key UNIQUE (user_id)
);
CREATE INDEX aplication_profile_restaurant_id_59a2d1bc ON public.aplication_profile USING btree (restaurant_id);


-- public.aplication_profile foreign keys

ALTER TABLE public.aplication_profile ADD CONSTRAINT aplication_profile_restaurant_id_59a2d1bc_fk_aplicatio FOREIGN KEY (restaurant_id) REFERENCES public.aplication_restaurant(restaurant_id) DEFERRABLE INITIALLY DEFERRED;
ALTER TABLE public.aplication_profile ADD CONSTRAINT aplication_profile_user_id_2412fad4_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;