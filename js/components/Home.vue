<template>
	<navbar></navbar>
	<div class="container">
		<a href="#" v-link="{path:'/add'}">Add</a>
		<div class="table-responsive users">
			<table class="table table-hover">
				<thead>
					<tr>
						<th>Name</th>
						<th>Title</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Address</th>
						<th>Company</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in user">
						<td>{{item.name}}</td>
						<td>{{item.title || '-'}}</td>
						<td>{{item.email}}</td>
						<td>{{item.phone}}</td>
						<td>{{item.address}}</td>
						<td>{{item.company}}</td>
						<td>
						<a href="" class="btn btn-default" v-link="{ name: 'user', params: { userId: item._id }}">Edit</a>
						|
						<button type="button" class="btn btn-default" @click="hapus(item)">Delete</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>


<style lang="css" scoped>
	.users {
		margin-top: 30px
	}
</style>

<script>
/* eslint-disable no-unused-vars,no-underscore-dangle*/
import $ from 'jquery';
import { deleteUser } from '../vuex/action';
import Navbar from './Navbar.vue';
export default {
  components: {
    Navbar,
  },
  methods: {
    _hapus(data) {
      return new Promise((resolve, reject) => {
        $.ajax({
          async: true,
          data,
          url: '/api',
          method: 'DELETE',
          error: (err) => {
            reject(err);
          },
          success: (results) => {
            resolve(results);
          },
        });
      });
    },
    hapus(item) {
      const doto = {
        id: item._id,
      };
      this._hapus(doto).then((res) => {
        this.deleteUser(item);
      });
    },
  },
  vuex: {
    actions: {
      deleteUser,
    },
    getters: {
      user: state => state.user,
    },
  },
};
</script>
