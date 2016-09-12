<template>
	<div class="container">

		<div class="col-md-6">
			<legend>Edit User</legend>
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
			<button type="submit" class="btn btn-primary" @click="updateUser">Save</button>
		</div>

	</div>
</template>


<script>
/* eslint-disable no-undef,no-underscore-dangle, new-cap, no-unused-vars, arrow-body-style*/
/* eslint-env es6*/
import _ from 'lodash';
import $ from 'jquery';
import { updateUser as UpUser } from '../vuex/action';
export default {
  created() {
    const id = this.$route.params.userId;
    const index = _.findIndex(this.user, (x) => { return x._id === id; });
    const data = this.user[index];
    this.$data = {
      id: data._id,
      name: data.name,
      title: data.title,
      phone: data.phone,
      email: data.email,
      address: data.address,
      company: data.company,
      index,
    };
  },
  data() {
    return {
      id: '',
      name: '',
      title: '',
      phone: '',
      email: '',
      address: '',
      company: '',
    };
  },
  methods: {
    _updateUsers(data) {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: '/api',
          method: 'PUT',
          data,
          error: (err) => {
            reject(err);
          },
          success: (res) => {
            resolve(res);
          },
        });
      });
    },
    updateUser() {
      const data = {
        id: this.id,
        name: this.name,
        title: this.title,
        phone: this.phone,
        email: this.email,
        address: this.address,
        company: this.company,
      };
      this._updateUsers(data).then((res) => {
        this.UpUser(this.index, data);
        this.$router.go('/');
      });
    },
  },
  vuex: {
    actions: {
      UpUser,
    },
    getters: {
      user: state => state.user,
    },
  },
};
</script>
