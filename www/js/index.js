/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var liElements = document.querySelectorAll('.liHeader');
    var footer = document.querySelector('[data-role="footer"]');

    if (width >= 540) {
        // Si la pantalla es grande, muestra los elementos
        liElements.forEach(function(li) {
            li.classList.remove('hidden');
        });
        // Y oculta el footer
        footer.classList.add('hidden');
    } else if (width <= 540) {
        // Si la pantalla es pequeña (500px o menos), oculta los elementos
        liElements.forEach(function(li) {
            li.classList.add('hidden');
        });
        // Y muestra el footer
        footer.classList.remove('hidden');
    }
});