quantity-popover {
  position: relative;
  display: block;
}

quantity-popover volume-pricing li:nth-child(odd) {
  background: rgba(var(--color-foreground), 0.03);
}

quantity-popover volume-pricing li {
  font-size: 1.2rem;
  letter-spacing: 0.06rem;
  padding: 0.6rem 0.8rem;
  display: flex;
  justify-content: space-between;
}

.quantity-popover__info.global-settings-popup {
  width: 100%;
  z-index: 3;
  position: absolute;
  background-color: rgb(var(--color-background));
  max-width: 36rem;
}

.quantity-popover__info .button-close,
.variant-remove-total quick-order-list-remove-all-button .button,
.quick-order-list-total__confirmation
  quick-order-list-remove-all-button
  .button,
quantity-popover quick-order-list-remove-button .button {
  --shadow-opacity: 0;
  --border-opacity: 0;
}

.quantity-popover__info-button {
  display: flex;
  align-items: center;
  margin: 0 0.4rem 0 0;
  min-width: 1.5rem;
  min-height: 1.5rem;
  --shadow-opacity: 0;
  --border-opacity: 0;
}

.quantity-popover__info-button--icon-with-label {
  align-items: flex-start;
  text-align: left;
}

.quantity-popover__info-button--icon-with-label svg {
  flex-shrink: 0;
}

.quantity-popover__info-button--open {
  text-decoration: underline;
}

.quantity-popover__info-button span {
  padding-left: 1rem;
}

.quantity-popover__info-button--icon-only--animation svg {
  transform: scale(1.25);
}

.quantity-popover__info-button--icon-only svg {
  transition: transform var(--duration-default) ease;
}
.quantity {
  position: relative;
  display: flex;
  border-style: solid;
  border-width: 1px;
  border-color: #821832;
}
.quantity__button {
  min-width: 2.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
}

.quantity__input {
  font-weight: 500;
  text-align: center;
  border: 0;
  padding: 0 0.5rem;
  min-width: 4rem;
  flex-grow: 1;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  width: 5rem;
  -moz-appearance: textfield;
  border-style: solid;
  border-width: 0px 1px;
  border-color: #821832;
}
.quantity__input::-webkit-outer-spin-button,
.quantity__input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.quantity__button svg {
  width: 1rem;
  pointer-events: none;
}
@media screen and (max-width: 989px) {
  .quantity-popover__info.global-settings-popup {
    left: 0;
    top: 100%;
  }

  .quantity-popover__info-button {
    padding-left: 0;
  }
}

.quantity-popover__info .quantity__rules {
  margin-top: 1.2rem;
  margin-bottom: 1rem;
}

.quantity-popover__info .volume-pricing-label {
  display: block;
  margin-left: 1.2rem;
  margin-top: 1.2rem;
  font-size: 1.2rem;
}

.quantity-popover__info .button {
  width: 3.2rem;
  height: 3.2rem;
  position: absolute;
  top: 0.4rem;
  right: 0;
  padding: 0 1.2rem 0 0;
  display: flex;
  justify-content: flex-end;
}

.quantity-popover__info .volume-pricing-label ~ .button {
  top: -0.2rem;
}

.quantity-popover__info .button .icon {
  width: 1.5rem;
  height: 1.5rem;
}

quantity-popover volume-pricing {
  margin-top: 1.2rem;
  display: block;
}

quantity-popover .quantity__rules span:first-of-type {
  display: block;
}

@media screen and (min-width: 990px) {
  .quantity-popover-container--empty {
    margin-right: 2.7rem;
  }

  .quantity-popover__info.global-settings-popup {
    width: 20rem;
  }

  .quantity-popover__info.global-settings-popup {
    transform: translateX(-100%);
    top: 0.5rem;
  }
}

quantity-popover .quantity__rules {
  margin-left: 0.8rem;
}

quantity-popover .quantity__rules .divider:nth-child(2)::before {
  content: none;
}

quantity-popover .quantity__button:not(:focus-visible):not(.focused),
quantity-popover .quantity__input:not(:focus-visible):not(.focused) {
  background-color: initial;
}
