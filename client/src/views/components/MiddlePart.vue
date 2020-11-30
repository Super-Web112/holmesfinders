<template>
    <div class="wrapper middle">
        <div class="container">
            <div class="md-layout md-gutter md-alignment-center">
                <div class="middle md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100 one">
                    <div class="why">
                        <h2 class="title">Why HolmesFinders Is The Perfect Choice?</h2>
                    </div>
                    <div class="">
                        <h2 class="title">01.</h2>
                    </div>
                    <div class="">
                        <h3 class="subtitle">Perfect Solution For Real Estate Agents</h3>
                    </div>
                    <div class="">
                        <p class="content">
                            Never miss a sale! its never been easier to turn leads into real customers.
                        </p>
                    </div>
                </div>
                <div class="middle md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100 two">
                    <div class="">
                    <h2 class="title">02.</h2> 
                    </div>
                    <div class="">
                    <h3 class="subtitle">Design Custom leads Cpture Forms</h3> 
                    </div>
                    <div class="">
                    <p class="content">Someone asked a question? Get back to them right away.</p> 
                    </div>
                    <div class="">
                    <h2 class="title">03.</h2> 
                    </div>
                    <div class="">
                    <h3 class="subtitle">Customer Relationship Management</h3> 
                    </div>
                    <div class="">
                    <p class="content">Keep track of your leads without having to pay for an external CRM.</p> 
                    </div>
                </div>
                <div class="middle md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                    <div class="multiform">
                        <form>
                                <label class="label">Inquiry Type</label>
                                <md-field>
                                <md-select name="inquiry" id="inquiry" placeholder="Purchase">
                                    <md-option value="purchase">purchase</md-option>
                                    <md-option value="sell">sell</md-option>
                                    <md-option value="rent">rent</md-option>
                                    <md-option value="miss">miss</md-option>
                                </md-select>
                                </md-field>
                                <label class="label">Information <i class="red">*</i></label>
                                <md-field>
                                <md-select name="information" id="information" placeholder="Select">
                                    <md-option value="select">Select</md-option>
                                    <md-option value="owner">I'm a property owner</md-option>
                                    <md-option value="agent">I'm a real estate agent</md-option><md-option value="miss">miss</md-option>
                                </md-select>
                                </md-field>
                                <md-field>
                                <md-input class="name" placeholder="First Name"></md-input>
                                <md-input class="name" placeholder="Last Name"></md-input>
                                </md-field>
                                <md-field>
                                <md-input  placeholder="Email Address"></md-input>
                                </md-field>
                                <md-field>
                                <md-input  placeholder="Phone Number"></md-input>
                                </md-field>
                                <md-field>
                                <md-select class="name" name="city" id="city" placeholder="Select City">
                                    <md-option value="select">Aelect City</md-option>
                                    <md-option value="adoni">Adoni</md-option>
                                    <md-option value="agra">Agra</md-option>
                                    <md-option value="aizawl">Aizawl</md-option>
                                </md-select>
                                <md-input class="name" placeholder="Zip code"></md-input>
                                </md-field>
                                <label class="label">Property</label>
                                <md-field>
                                <md-select name="inquiry" id="inquiry" placeholder="Select Type">
                                    <md-option value="select">Select Type</md-option>
                                    <md-option value="commercial">Commercial</md-option>
                                    <md-option value="land">-- Commercial Land</md-option>
                                    <md-option value="office">-- Office</md-option>
                                    <md-option value="shop">-- Shop</md-option>
                                    <md-option value="Residential">Residential</md-option>
                                    <md-option value="apartment">-- Apartment</md-option>
                                    <md-option value="HouseVilla">-- House/Villa</md-option>
                                    <md-option value="PlotLand">-- Plot/Land</md-option>
                                </md-select>
                                </md-field>
                                <md-field>
                                <md-input type="number" class="name" placeholder="Max Price"></md-input>
                                <md-input type="number" class="name" placeholder="Min Size(Sq Ft)"></md-input>
                                </md-field>
                                <md-button class="md-info sb" name="submit">Submit</md-button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.sb{
    width: 100% !important;
}
.name{
    width: 130px;
    text-align: center !important;
}
.one{
    padding-top: 10%;
    margin-bottom: 0px !important;
}
.two{
    padding-top: 10%;
    margin-bottom: 70px !important;
}
.middle{
    background-color: #686767;
    margin-top: 10%;
    margin-bottom: 5%;
}
.why{
    border-bottom: 1px  solid white;
}
.red{
    color: red;
}
.multiform{
    background-color: white;
    padding-top: 10%;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 10%;
}
.title{
    font-family: "Lora", Sans-serif;
    font-size: 35px;
    font-weight: 500;
    line-height: 1.3em;
    margin-bottom: 10px;
    color: white !important;
    text-align: left;
}
.subtitle{
    font-family: "Lora", Sans-serif;
    font-size: 25px;
    font-weight: 700;
    line-height: 1.2em;
    margin-bottom: 15px;
    color: white !important;
    text-align: left;
}
.content{
    color: white !important;
    font-size: 17px;
    border-bottom: 1px solid white;
    padding-bottom: 10%;
    text-align: left;
}
@media (min-width: 1200px){
.md-toolbar-row, .section .container, .footer .container {
    max-width: 1400px !important;
}}
@media (min-width: 992px){
.md-toolbar-row, .section .container, .footer .container {
    max-width: 960px;
}}
@media (min-width: 768px){
.md-toolbar-row, .section .container, .footer .container {
    max-width: 720px;
}}
@media (min-width: 576px){
.md-toolbar-row, .section .container, .footer .container {
    max-width: 540px;
}}
</style>