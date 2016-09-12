<template>
	<navbar></navbar>
	<div class="container">

		<div class="col-md-6">
			<legend>Add User</legend>
			<div class="form-group">
				<label for="">Name</label>
				<input type="text" class="form-control" v-model="name" placeholder="Name">
			</div>

			<div class="form-group">
				<label for="">Email</label>
				<input type="email" class="form-control" v-model="email" placeholder="Email">
			</div>

			<div class="form-group">
				<label for="">Title</label>
				<input type="email" class="form-control" v-model="title" placeholder="Title">
			</div>

			<div class="form-group">
				<label for="">Phone Number</label>
				<input type="text" class="form-control" v-model="phone" placeholder="Phone Number">
			</div>

			<div class="form-group">
				<label for="">Address</label>
				<input type="text" class="form-control" v-model="address" placeholder="Address">
			</div>

			<div class="form-group">
				<label for="">Company</label>
				<input type="text" class="form-control" v-model="company" placeholder="Company">
			</div>

			<a href="#" v-link="{path:'/'}" class="btn btn-danger">Kembali</a>
			<button type="submit" class="btn btn-primary" @click="addUser">Save</button>
		</div>

	</div>
</template>


<script>
/* eslint-disable no-undef,no-underscore-dangle, new-cap*/
import $ from 'jquery';
import { addUser as AddUser } from '../vuex/action';
import Navbar from './Navbar.vue';
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      name: '',
      title: '',
      phone: '',
      email: '',
      address: '',
      company: '',
    };
  },
  methods: {
    _add(data) {
      return new Promise((resolve, reject) => {
        $.ajax({
          async: true,
          data,
          url: '/api',
          method: 'POST',
          error: (err) => {
            reject(err);
          },
          success: (results) => {
            resolve(results);
          },
        });
      });
    },
    addUser() {
      this._add(this.$data).then((res) => {
        this.AddUser(res.user);
      });
    },
  },
  vuex: {
    actions: {
      AddUser,
    },
  },
};
</script>
