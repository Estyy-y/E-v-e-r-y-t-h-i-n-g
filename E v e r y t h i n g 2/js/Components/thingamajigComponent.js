Vue.component('thingamajig-component', {
	props: ['thingamajig'],
	methods: {
		format(amount) { return format(amount); },
		buy() { if (this.thingamajig.canPower) this.thingamajig.power(); }
	},
	computed: {
		totalMultiplier() {
			return this.format(this.thingamajig._totalMultiplier);
		}
	},
	template: `
		<div class="generator" @click="buy" :class="{disabled: !thingamajig.canPower}" style="cursor:pointer; user-select:none;">
			<div style="text-align:center; font-weight:bold; font-size:1.1em; margin-bottom:2px;">
				{{ thingamajig._name }}
			</div>
			<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2px;">
				<span style="text-align:left;">Power: {{ format(thingamajig._power) }}</span>
				<span style="text-align:right;">Cost: {{ format(thingamajig._cost) }}</span>
			</div>
			<div style="text-align:center; font-size:0.95em; color:#444;">
				{{ totalMultiplier }}x
			</div>
		</div>
	`
});
