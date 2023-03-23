import {
  component$,
  Slot,
  useStylesScoped$,
  PropFunction,
} from "@builder.io/qwik";
import styles from "./Modal.scss?inline";

interface Props {
  handleClose$: PropFunction<() => void>;
}

export default component$((props: Props) => {
  useStylesScoped$(styles);

  return (
    <div class="modal">
      <div class="modal-content">
        <div class="close" onClick$={props.handleClose$}>
          &times;
        </div>
        <div class="main-content">
          <Slot />
        </div>
        <div class="footer">footer content</div>
      </div>
    </div>
  );
});
