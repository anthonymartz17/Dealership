<template>
	<div>
		<div class="makeModel-wrapper">
			<div
				class="search-fields-container-field"
				v-for="(field, key) in makeModel"
				:key="key"
				@click="
					toggleOptionsCard($event);
					updateClickedFieldContent(field.id);
				"
			>
				<p>{{ field.field }}</p>
				<i class="fas fa-caret-down"></i>
			</div>
		</div>
	</div>
</template>

<script>
import {mapMutations, mapState} from "vuex";
export default {
	methods: {
		...mapMutations(["toggleOptionsCard", "updateClickedFieldContent"]),
	},
	computed: {
		...mapState(["filters"]),
// working here for mobile view?????????????
		makeModel() {
			let make, model;
			switch (make) {
				case this.filters.make.typeSelected !== "":
					make = this.filters.make.typeSelected;
					break;
				default:
					make = "Make";
			}

			if (this.filters.models.typeSelected == "") {
				model = "Model";
			}
			if (
				this.filters.make.typeSelected != "All makes" &&
				this.filters.make.typeSelected != ""
			) {
				model = `All ${this.filters.make.typeSelected}`;
			} else {
				model = this.filters.models.typeSelected;
			}

			return [
				{field: make, id: "make"},
				{field: model, id: "model"},
			];
		},
	},
};
</script>

<style lang="scss" scoped>
.makeModel-wrapper {
	display: grid;
	grid-template-columns: 1fr;
}
</style>
