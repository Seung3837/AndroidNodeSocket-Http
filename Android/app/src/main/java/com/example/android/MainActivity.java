package com.example.android;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

public class MainActivity extends AppCompatActivity {
    String url = "http://192.168.0.13:8080";

    WebSocket socket = new WebSocket(url);
    RequestHTTP request = new RequestHTTP();
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        socket.connect();
        socket.run();
        socket.sendMsg("content");
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        socket.disconnect();

        new Thread(new Runnable() {
            @Override
            public void run() {
                request.doInBackground((url + "/app"));
            }
        }).start();
    }
}
