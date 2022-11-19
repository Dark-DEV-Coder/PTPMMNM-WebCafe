import React from "react";
import { Routes, Route } from "react-router-dom";
import IndexLogin from "../admin/features/Login/index";
import HomeAdmin from "../admin/features/HomePage/index";
import Products from "../admin/features/Products";
import NotFoundPage from "../components/NotFound";
import New from "../admin/features/Products/components/newproduct/Newproduct";
import SingleProduct from "../admin/features/Products/components/singleproduct/Single";
import Category from "../admin/features/Category";
import NewCategory from "../admin/features/Category/components/newcategory/Newcategory";
import SingleCategory from "../admin/features/Category/components/singlecategory/Single";
import Customer from "../admin/features/Customers";
import Newcustomers from "../admin/features/Customers/components/newcustomer/Newcustomers";
import { customerInputs } from "../admin/features/Customers/components/newcustomer/formSource";
import SingleCustomer from "../admin/features/Customers/components/singlecustomer/Single";
import Provider from "../admin/features/Providers";
import Newprovider from "../admin/features/Providers/components/newprovider/Newprovider";
import SingleProvider from "../admin/features/Providers/components/singleprovider/Single";
import Staff from "../admin/features/Staffs";
import NewStaff from "../admin/features/Staffs/components/newstaff/Newstaff";
import SingleStaff from "../admin/features/Staffs/components/singlestaff/Single";
import Bill from "../admin/features/Bills";
import NewBill from "../admin/features/Bills/components/newbill/Newbill";
import { billInputs } from "../admin/features/Bills/components/newbill/formSource";
import Statistical from "../admin/features/Bills/components/statistical/Statistical";
import Import from "../admin/features/Imports";
import NewImport from "../admin/features/Imports/components/newimport/Newimport";
import { importInputs } from "../admin/features/Imports/components/newimport/formSource";
import Account from "../admin/features/Accounts";
import NewAccount from "../admin/features/Accounts/components/newaccount/Newaccount";
import { accountInputs } from "../admin/features/Accounts/components/newaccount/formSource";
import Function from "../admin/features/Functions";
import NewFunction from "../admin/features/Functions/components/newfunction/Newfunction";
import { functionInputs } from "../admin/features/Functions/components/newfunction/formSource";
import Vote from "../admin/features/Votes";

import Home from "../user/features/Home";
const Router = () => {
    return (
        <div>
            {/* Muốn html nào k thay đổi theo router thì làm ở đây */}
            <Routes>
                <Route path="/">
                    <Route path="admin">
                        <Route index element={<IndexLogin />}></Route>
                        <Route path="home" element={<HomeAdmin />}></Route>
                        {/* <Route path="login_admin" element={<IndexLogin />}></Route> */}
                        <Route path="404" element={<NotFoundPage />}></Route>
                        <Route path="products">
                            <Route index element={<Products />}></Route>
                            <Route path="new" element={<New title="Thêm sản phẩm" />}></Route>
                            <Route path="single/:id" element={<SingleProduct title="Thông tin chi tiết sản phẩm" />}></Route>

                        </Route>
                        <Route path="category">
                            <Route index element={<Category />}></Route>
                            <Route path="new" element={<NewCategory title="Thêm loại sản phẩm" />}></Route>
                            <Route path="single/:id" element={<SingleCategory title="Thông tin chi tiết loại sản phẩm" />}></Route>
                        </Route>
                        <Route path="customer">
                            <Route index element={<Customer />}></Route>
                            <Route path="new" element={<Newcustomers inputs={customerInputs} title="Thêm khách hàng" />}></Route>
                            <Route path="single/:id" element={<SingleCustomer title="Thông tin chi tiết khách hàng" />}></Route>
                        </Route>
                        <Route path="provider">
                            <Route index element={<Provider />}></Route>
                            <Route path="new" element={<Newprovider title="Thêm nhà cung cấp" />}></Route>
                            <Route path="single/:id" element={<SingleProvider title="Thông tin chi tiết nhà cung cấp" />}></Route>
                        </Route>
                        <Route path="staff">
                            <Route index element={<Staff />}></Route>
                            <Route path="new" element={<NewStaff title="Thêm nhân viên" />}></Route>
                            <Route path="single/:id" element={<SingleStaff title="Thông tin chi tiết nhân viên" />}></Route>
                        </Route>
                        <Route path="bill">
                            <Route index element={<Bill />}></Route>
                            <Route path="new" element={<NewBill inputs={billInputs} title="Thêm hóa đơn" />}></Route>
                            {/* <Route path="single" element={<Single />}></Route> */}
                        </Route>
                        <Route path="statistical">
                            <Route index element={<Statistical />}></Route>

                        </Route>
                        <Route path="imports">
                            <Route index element={<Import />}></Route>
                            <Route path="new" element={<NewImport inputs={importInputs} title="Thêm phiếu nhập hàng" />}></Route>
                            {/* <Route path="single" element={<Single />}></Route> */}
                        </Route>
                        <Route path="accounts">
                            <Route index element={<Account />}></Route>
                            <Route path="new" element={<NewAccount inputs={accountInputs} title="Thêm tài khỏan" />}></Route>
                            {/* <Route path="single" element={<Single />}></Route> */}
                        </Route>
                        <Route path="functions">
                            <Route index element={<Function />}></Route>
                            <Route path="new" element={<NewFunction inputs={functionInputs} title="Thêm quyền tài khoản" />}></Route>
                            {/* <Route path="single" element={<Single />}></Route> */}
                        </Route>
                        <Route path="votes">
                            <Route index element={<Vote />}></Route>
                            {/* <Route path="new" element={<New inputs={productInputs} title="Thêm sản phẩm" />}></Route>
                        <Route path="single" element={<Single />}></Route> */}
                        </Route>
                    </Route>
                </Route>

                <Route path="/">
                    <Route index element={<Home />}></Route>
                </Route>
            </Routes>
        </div >
    )
}
export default Router