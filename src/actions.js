/*
 * action types
 */
export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const AUTH_STATE_CHANGED = "AUTH_STATE_CHANGED";

export const LOAD_CART = "LOAD_CART";

export function addProducts(products) {
  return { type: ADD_PRODUCTS, products };
}

export function loadCart(cart) {
  return { type: LOAD_CART, cart };
}

export function addToCart(product) {
  let userId = window.firebase.auth().O;
  if (userId && userId.length > 0) {
    let database = window.firebase.database();
    let ref = "cart/" + userId;
    let itemAdded = false;
    window.firebase
      .database()
      .ref(ref)
      .on("value", snapshot => {
        if (!itemAdded) {
          var currentCart = snapshot.val();

          if (!currentCart) {
            currentCart = [];
          } else {
            currentCart = currentCart.slice();
          }
          console.log(currentCart);

          currentCart.push(product);
          console.log(itemAdded);
          itemAdded = true;
          database.ref(ref).set(currentCart);
        }
      });
  }

  return { type: ADD_TO_CART, product };
}

export function removeFromCart(product) {
  return { type: REMOVE_FROM_CART, product };
}

// export function addToWishlist(){
//     let symbol = 'GE';
//     let userId = window.firebase.auth().O;
// if ((userId) && (userId.length > 0)) {
//     let ref = userId + "/watchlist";
//     window.firebase.database().ref(ref).once('value', (snapshot) => {
//         let watchlist = snapshot.val() || [];
//         if (watchlist.indexOf(symbol) === -1) {
//             watchlist.push(symbol);
//         }
//         window.firebase.database().ref(ref).set(watchlist);
//     });
// }

export function authStateChanged(user) {
  return { type: AUTH_STATE_CHANGED, user };
}
