<script lang="ts">
  let bill = 0;
  let numberOfPeople = 1;

  let tipButton = 5;
  let customTip = "";

  $: tip = customTip ? parseFloat(customTip) : tipButton;
  $: tipAmount = (bill * (tip / 100)) / numberOfPeople || 0;
  $: total = (bill + tipAmount) / numberOfPeople || 0;

  function selectTip(value: number) {
    customTip = "";
    tipButton = value;
  }

  function handleCustomTip(event: Event) {
    const target = event.target as HTMLInputElement;
    const targetValue = target.value;

    tipButton = 0;
    customTip = targetValue;
  }

  function handlePeopleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const targetValue = target.value;

    if (targetValue === "") {
      numberOfPeople = 1;
    } else {
      numberOfPeople = parseInt(targetValue);
    }
  }

  function reset() {
    bill = 0;
    numberOfPeople = 1;
    tipButton = 5;
    customTip = "";
  }
</script>

<div class="logo">
  <img src="/images/logo.svg" alt="splitter" />
</div>

<div class="splitter">
  <div class="inputs">
    <div class="input-wrapper">
      <label class="input-label" for="bill">Bill</label>
      <input
        class="input"
        type="number"
        name="bill"
        bind:value={bill}
        placeholder="0"
        min="0"
      />
      <img class="input-icon" src="/images/icon-dollar.svg" alt="dollar icon" />
    </div>
    <div class="input-wrapper">
      <label class="input-label" for="tip">Select tip %</label>
      <div class="tip-buttons">
        <button
          class="tip-button"
          data-active={tipButton === 5 ? "true" : "false"}
          on:click={() => selectTip(5)}>5%</button
        >
        <button
          class="tip-button"
          data-active={tipButton === 10 ? "true" : "false"}
          on:click={() => selectTip(10)}>10%</button
        >
        <button
          class="tip-button"
          data-active={tipButton === 15 ? "true" : "false"}
          on:click={() => selectTip(15)}>15%</button
        >
        <button
          class="tip-button"
          data-active={tipButton === 25 ? "true" : "false"}
          on:click={() => selectTip(25)}>25%</button
        >
        <button
          class="tip-button"
          data-active={tipButton === 50 ? "true" : "false"}
          on:click={() => selectTip(50)}>50%</button
        >
        <input
          class="input"
          type="number"
          placeholder="Custom"
          bind:value={customTip}
          on:input={(e) => handleCustomTip(e)}
        />
      </div>
    </div>
    <div class="input-wrapper">
      <label class="input-label" for="people">Number of People</label>
      <input
        class="input"
        type="number"
        name="people"
        placeholder="0"
        bind:value={numberOfPeople}
        on:input={handlePeopleInput}
        min="1"
      />
      <img class="input-icon" src="/images/icon-person.svg" alt="person icon" />
    </div>
  </div>
  <div class="outputs">
    <div class="output-item">
      <div>
        <span class="output-item-label">Tip Amount</span>
        <span class="output-item-sublabel">/ person</span>
      </div>
      <span class="output-item-amount">{tipAmount.toFixed(2)}</span>
    </div>
    <div class="output-item">
      <div>
        <span class="output-item-label">Total</span>
        <span class="output-item-sublabel">/ person</span>
      </div>
      <span class="output-item-amount">{total.toFixed(2)}</span>
    </div>
    <button
      class="button"
      on:click={reset}
      data-disabled={bill > 0 || numberOfPeople > 1 || tipButton !== 5
        ? "false"
        : "true"}>Reset</button
    >
  </div>
</div>

<style lang="scss">
  @use "../styles/variables" as var;

  :global {
    @import "../styles/globals.scss";
  }

  .logo {
    margin-bottom: 32px;
  }

  .splitter {
    max-width: 425px;
    padding: 32px;
    background-color: var.$white;
    border-radius: 16px;
  }

  .input-wrapper {
    position: relative;
    margin-bottom: 32px;
  }

  .input-label {
    display: block;
    margin-bottom: 16px;
    color: var.$dark-grayish-cyan;
  }

  .input-icon {
    position: absolute;
    bottom: 16px;
    left: 16px;
  }

  .input {
    width: 100%;
    padding: 4px 16px;
    background-color: var.$very-light-grayish-cyan;
    font-size: var.$input-font-size;
    color: var.$very-dark-cyan;
    text-align: right;
    border-radius: 4px;

    &::placeholder {
      color: var.$grayish-cyan;
    }

    &:focus {
      outline: 2px solid var.$strong-cyan;
    }

    // &[data-error="true"] {
    //   outline: 2px solid hsl(0, 50%, 65%);
    // }
  }

  .tip-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .tip-button {
    padding: 4px;
    background-color: var.$very-dark-cyan;
    font-size: var.$input-font-size;
    color: var.$white;
    border-radius: 4px;
    transition: 100ms ease-in;

    &[data-active="true"] {
      background-color: var.$strong-cyan;
      color: var.$very-dark-cyan;
    }
  }

  .outputs {
    padding: 24px;
    background-color: var.$very-dark-cyan;
    border-radius: 12px;
  }

  .output-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
  }

  .output-item-label {
    display: block;
    color: var.$white;
    margin-bottom: 8px;
  }

  .output-item-sublabel {
    display: block;
    font-size: 14px;
    color: var.$grayish-cyan;
  }

  .output-item-amount {
    font-size: 32px;
    color: var.$strong-cyan;
  }

  .button {
    width: 100%;
    padding: 8px;
    background-color: var.$strong-cyan;
    font-size: 20px;
    color: var.$very-dark-cyan;
    border-radius: 4px;
    text-transform: uppercase;
    transition: 100ms ease-in;

    &:hover {
      background-color: var.$light-grayish-cyan;
    }

    &[data-disabled="true"] {
      pointer-events: none;
      opacity: 0.2;
    }
  }
</style>
