Vue.component('thingamajig-component', {
	props: ['thingamajig'],
	methods: {
		format(amount) { return format(amount); },
		formatWhole(amount) { return formatWhole(amount); },
		buy() { if (this.thingamajig.canPower) this.thingamajig.power(); },
		canAfford(amount) { return player.things.gte(amount); }
	},
	computed: {
		totalMultiplier() {
			return this.format(this.thingamajig._totalMultiplier);
		},
		isMaxed() {
			return this.thingamajig._power.gte(100);
		},
	},
	template: `
		<div class="thingamajig" @click="buy" :class="[{disabled: !thingamajig.canPower}, thingamajig.powerTheme, {charged: isMaxed}]">
			<div class="thingamajig-symbol-bg">
				<span class="thingamajig-symbol">{{ thingamajig._symbol }}</span>
			</div>
			<div class="thingamajig-header">
				<div class="thingamajig-header-left">
					<div class="thingamajig-smallName">Thingamajig</div>
					 <div class="thingamajig-name" :class="{ 'maxed-text': isMaxed }">{{ thingamajig._name }}</div>
				</div>
				<div class="thingamajig-multiplier">x{{ totalMultiplier }}</div>
			</div>
			<div class="thingamajig-footer">
				<div class="thingamajig-power">
					<div class="thingamajig-label">Power</div>
					 <div class="thingamajig-power-value" :class="{ 'maxed-text': isMaxed }">{{ formatWhole(thingamajig._power) }}%</div>
				</div>
				<div class="thingamajig-cost">
					<div class="thingamajig-label">Cost</div>
					 <div class="thingamajig-cost-value" :style="{color: thingamajig.canPower ? '#90EE90' : '#ff6a6a'}">
						 <template v-if="!isMaxed">{{ format(thingamajig._cost) }}</template>
						 <template v-else>Maxed</template>
					 </div>
				</div>
			</div>
		</div>
	`
});
